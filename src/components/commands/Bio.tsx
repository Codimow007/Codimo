import { GoVerified } from "react-icons/go";
import { SiGithub, SiYoutube, SiRoblox } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/Codimow007",
			text: "@Codimo",
		},
		{
			title: "Youtube",
			Icon: SiYoutube,
			href: "https://www.youtube.com/",
			text: "@XXXXXX",
		},
		{
			title: "Roblox",
			Icon: SiRoblox,
			href: "https://www.roblox.com/users/1299564944/profile",
			text: "@Roblox",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/101398818?s=400&u=91dc78c58718341c806c5cd9f75a0bcbb319b21d&v=4"
					alt="Codimo pfp"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Codimo</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 13 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a Software Developer and Game Developer. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the internet. 
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
