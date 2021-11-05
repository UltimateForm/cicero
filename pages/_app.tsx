import { BackgroudGray } from "layout/Background";
import { Fullscreen } from "layout/AppView";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "store";
import { LibraryLoader } from "layout/LibraryLoader";
import "./app.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<style jsx global>{`
				::-webkit-scrollbar {
					width: 12px;
				}

				::-webkit-scrollbar-track {
					-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
					border-radius: 10px;
				}

				::-webkit-scrollbar-thumb {
					border-radius: 10px;
					background-color: #4c5666;
				}
			`}</style>
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
