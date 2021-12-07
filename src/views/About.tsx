import useMediaQuery from "hooks/useMediaQuery";

function NetworkItem(props: { icon: string; address: string }) {
	return (
		<a
			href={props.address}
			target="_blank"
			referrerPolicy="no-referrer"
			rel="noreferrer"
		>
			<img src={props.icon} className="h-10 lg:h-12" />
		</a>
	);
}

export function AboutView() {
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	return (
		<div className="h-full w-full flex items-center flex-col justify-between max-h-96 text-center max-w-sm place-items-center">
			<img src="/images/author.png" className="h-48 lg:h-72" />
			<span className="flex flex-col">
				My name is [redacted] and I write some stuff that look like poetry
				{!isDesktop && (
					<span className="text-xs lg:text-sm">
						Note: this website is better experienced on desktop
					</span>
				)}
			</span>
			<div className="flex flex-row justify-around content-around">
				<NetworkItem
					icon="/images/icons8-tumblr.svg"
					address={process.env.NEXT_PUBLIC_TUMBLR}
				/>
				<NetworkItem
					icon="/images/icons8-twitter.svg"
					address={process.env.NEXT_PUBLIC_TWITTER}
				/>
				<NetworkItem
					icon="/images/icons8-myspace.svg"
					address={process.env.NEXT_PUBLIC_MYSPACE}
				/>
				<NetworkItem
					icon="/images/icons8-facebook.svg"
					address={process.env.NEXT_PUBLIC_FACEBOOK}
				/>
			</div>
			<NetworkItem
				icon="/images/github.svg"
				address={process.env.NEXT_PUBLIC_GITHUB}
			/>
		</div>
	);
}
