import TopBar from "../TopBar";
import avatar from "../../assets/avatar.png";
const Main = () => {

	const name = "Kabir";

	return (
		
		<div className="bg-gray-100 h-screen w-screen ">
      <div className="fixed w-full z-10 top-0">
        <TopBar />
      </div>

		<div className="flex flex-col">

			<div className="mt-20 p-10 flex flex-wrap items-center justify-center">
				<div className="rounded-xl  bg-gradient-to-r from-green-500 to-cyan-500 h-80">

					<div className="my-20 mx-40 flex items-center justify-center">
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center justify-center">
								<h1 className="font-serif text-white text-7xl font-bold">Good to see you!</h1>
							</div>
							<div className="my-10 flex items-center justify-center">
								<h1 className="font-serif text-white text-6xl font-bold">{name}</h1>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>

			<div className="flex flex-row items-center justify-center flex-wrap py-1">
				<div className="flex-1 h-64 m-2 py-1">
				<div class="rounded-xl bg-white shadow-lg ">

					<div class="flex flex-wrap w-full px-3 pt-3 bg-emerald-500">
					<h2 class="mb-4 text-lg font-medium text-white">Profile</h2>
					</div>

					<div class="flex flex-wrap items-center justify-center">
						<div class = "flex flex-col">
							<div class = "flex flex-wrap items-center justify-center px-5 py-5">
								<img src={avatar} width="50" height = "50" alt="avatar" />
							</div>

							<div class = "flex flex-wrap items-center justify-center px-5 py-1">
								<a href="" className="font-medium">{name}</a>
							</div>
						</div>
					</div>
					

					<div class="flex flex-wrap">
						<div class="flex flex-col py-5">

							<div class="flex flex-row">
								<div className="flex-auto pl-5">
									<h1 class="font-medium">Email:</h1>
								</div>
								<div className="flex-auto pl-6">
									<h1 className="font-normal">nibir@iut-dhaka.edu</h1>
								</div>
							</div>

							<div class="flex flex-row">
								<div className="flex-auto pl-5">
									<h1 class="font-medium">Department:</h1>
								</div>
								<div className="flex-auto pl-6">
									<h1 className="font-normal">Computer Science and Engineering</h1>
								</div>
							</div>

							<div class="flex flex-row">
								<div className="flex-auto pl-5">
									<h1 class="font-medium">Batch:</h1>
								</div>
								<div className="flex-auto pl-6">
									<h1 className="font-normal">20</h1>
								</div>
							</div>


						</div>
					</div>
				</div>
				</div>

				<div className="flex-auto h-64 m-2">
				<div class="rounded-lg bg-white p-6 shadow-lg bg-emerald-100">
					<h2 class="mb-4 text-lg font-medium">Job Search</h2>
					<div class="mb-4 flex">
						<input type="text" placeholder="Search Jobs" class="w-full rounded-l-md border border-gray-400 px-4 py-2 focus:border-green-600 focus:outline-none focus:ring" />
						<button class="rounded-r-md bg-emerald-500 px-4 py-2 text-white hover:bg-teal-700 focus:border-green-600 focus:outline-none focus:ring">Search</button>
					</div>
					<p class="text-gray-700">Enter a keyword or a job title to find relevant jobs.</p>
					</div>

				</div>

				<div className="flex-1 h-64 m-2">

					<div class= "rounded-xl bg-white shadow-lg">
						<div class="flex flex-wrap w-full px-3 pt-3 bg-emerald-500">
							<h2 class="mb-4 text-lg font-medium text-white">Inbox</h2>
						</div>


						
					</div>

				</div>
			</div>
		</div>

      


    </div>

		
	);
};

export default Main;