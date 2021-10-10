import { BackgroudGray } from "layout/Background";
import { Fullscreen } from "layout/AppView";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "store";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<BackgroudGray>
				<Fullscreen>
					<Component {...pageProps} />
				</Fullscreen>
			</BackgroudGray>
		</Provider>
	);
}

export default MyApp;
