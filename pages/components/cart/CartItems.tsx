import React from 'react';

const CartItems: React.FC<{
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}> = (props) => {
	return (
		<div className="grid mt-5">
			<div className="cartItems grid grid-cols-5 gap-3 text-white">
				<div className="col-span-2">
					<img
						src={props.image}
						className="rounded-xl"
					/>
				</div>
				<div className="col-span-3">
					<h4>{props.title}</h4>
					<div className="mt-4 flex gap-2">
						<button className="font-bolder border px-3 background-white" >
							+
						</button>
						<span className="border px-5 py-1">{props.quantity}</span>
						<button className="font-bolder border px-3 background-white">
							-
						</button>
					</div>
                    <div className="mt-3 text-sm">
                        <p className="text-blue-200">Price: ${props.price}</p>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
