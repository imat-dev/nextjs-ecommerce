import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/ui/Layout";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</SessionProvider>
		
	);
}
