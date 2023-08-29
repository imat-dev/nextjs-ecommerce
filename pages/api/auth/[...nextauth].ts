import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';
import { verifyPassword } from '@/util/auth';
import GoogleProvider from 'next-auth/providers/google';
import service from '@/service';
import LinkedInProvider from 'next-auth/providers/linkedin';

export const authOptions = {
	session: {
		jwt: true,
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			return { ...session, user: token };
		},
		async signIn({ account, profile }) {
			if (account.provider === 'google') {
				// we can do DB queries here
				// console.log({
				// 	verified: profile.email_verified,
				// 	name: profile.given_name,
				// 	email: profile.email,
				// 	lastName: profile.family_name,
				// });

				let isUserExist;
				try {
					isUserExist = await service.userService.findUserByEmail(
						profile.email
					);
				} catch (e) {
					console.log('Error checking if user exist');
					throw new Error('Internal Server Error');
				}

				const newUser = {
					email: profile.email,
					firstName: profile.given_name,
					lastName: profile.family_name,
					password: '',
					provider: 'google',
				};

				if (!isUserExist) {
					try {
						await service.userService.createUser(newUser);
					} catch (e) {
						console.log('Error creating user');
						throw new Error('Internal Server Error');
					}
				}

				return true;
			}

			return true; // do other things for other providers
		},
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			authorize: async (credentials: any) => {
				let user;
				try {
					user = await service.userService.findUserByEmail(
						credentials.email
					);
				} catch (e) {
					//put error logger here
					console.log('Failed searching for registered user');
					throw new Error('Internal server error.');
				}

				if (!user) {
					throw new Error('Invalid email or password.');
				}

				let isValidPassword;
				try {
					isValidPassword = await verifyPassword(
						credentials.password,
						user.password
					);
				} catch (e: any) {
					console.log('Error hashing passwords');
					throw new Error('Internal server error.');
				}

				if (!isValidPassword) {
					throw new Error('Invalid email or password');
				}

				console.log('Login!');
				return {
					email: user.email,
					name: user.firstName + ' ' + user.lastName,
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
		}),
	],
};
//call next auth here
export default NextAuth(authOptions);
