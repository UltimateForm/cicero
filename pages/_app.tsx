import { BackgroudGray800 } from "layout/Background";
import { FullScreen } from "layout/AppView";
import "tailwindcss/tailwind.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<BackgroudGray800>
				<FullScreen>
					<Component {...pageProps} />
				</FullScreen>
			</BackgroudGray800>
		</Provider>
	);
}

export default MyApp;
