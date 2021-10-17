import { BackgroudGray } from "layout/Background";
import { Fullscreen } from "layout/AppView";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "store";
import { LibraryLoader } from "layout/LibraryLoader";
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<BackgroudGray>
				<Fullscreen>
					<LibraryLoader>
						<Component {...pageProps} />
					</LibraryLoader>
				</Fullscreen>
			</BackgroudGray>
		</Provider>
	);
}

export default MyApp;
