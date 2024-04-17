const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: null,
			userName: null,
			randomUser: [],
			fav: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


				//reset the global store
				setStore({ demo: demo });
			},
			getMessage: async () => {
				const store = getStore()
				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					},
				}
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello", options)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			syncSessionToken: () => {
				const token = sessionStorage.getItem('token');
				if (token && token !== "" && token !== undefined) {
					setStore({ token: token })
				}
			},
			login: async (UserName, password) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							UserName: UserName,
							password: password
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "/token", options)
					if (response.status !== 200) {
						alert("Error response code", response.status)
						return false;
					}
					const data = await response.json()
					console.log("access token", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({
						token: data.access_token,
						userName: data.user

					})
					return true;
				}
				catch (error) {
					console.log("login error please try again")
				}
			},
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("you are logged out")
				setStore({
					token: null
				})
			},
			getUsers: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/user")
				let data = await response.json()
				for (let user in data) {
					if (user.UserName == getStore().userName) { setStore({ user: user }) }
				}
			},

			SignUp: async (email, UserName, DateOfBirth, password) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							UserName: UserName,
							email: email,
							DateOfBirth: DateOfBirth,
							password: password
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "/signup", options)
					if (response.status !== 200) {
						alert("error response code", response.status)
						return false
					}
					const data = await response.json()
					console.log("from the backend", data)
					return true
				}
				catch (error) { console.log("login error") }

			},
			fetchRandomUser: () => {
				fetch("https://randomuser.me/api/?gender=female")
					.then(response => {
						if (!response.ok) throw Error(respond.statusText)
						return response.json()
					})

					.then(data => {
						console.log(data)
						setStore({ randomUser: data.results })
					})
					.catch(error => console.log("there was an error fetching random person ", error))
			},
			ForgotPassword: async (email) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email
					})
				};
				const res = await fetch(process.env.BACKEND_URL + "/forgot-password", opts);
				if (res.status < 200 || res.status >= 300) {
					throw new Error("User does not exist");
				}
				const data = await res.json();
			},


			
			addFav:(item)=>{
				setStore({fav:[...getStore().fav,item]})

			},
			deleteFav:(item)=>{
				setStore({fav:getStore().fav.filter((x)=>{return x!=item})})
			},






			// addFavorite: (page) => {
				// look at starwar favorites functionaility
				// page will equal the src="" value and you can pass that into a new img tag to repopulate
				// if (sessionStorage.getItem("token")) {
					// const token = sessionStorage.getItem('token');
					// const opts = {
					// 	headers: {
					// 		Authorization: "Bearer " + token,
					// 		'Content-Type': 'application/json'
					// 	},
					// 	method: "POST",
					// 	body: JSON.stringify({ page: page }),
					// };
					// use if you make favorites in the back end
					// fetch(process.env.BACKEND_URL + "/api/favorites", opts)
					// 	.then((response) => response.json())
					// 	.then((data) => {
					// 		if (data.msg == "ok") {
					// 			f.push(item);
					// 			setStore({ favorites: f });
					// 		}
					// 	})
					// 	.catch((error) => { console.log(error); });
				// }
			// },
			// removeFavorite: (page) => {
			// 	if (sessionStorage.getItem("token")) {
					// const token = sessionStorage.getItem('token');
					// const opts = {
					// 	headers: {
					// 		Authorization: "Bearer " + token,
					// 		'Content-Type': 'application/json'
					// 	},
					// 	method: "DELETE",
					// 	body: JSON.stringify({ page: page }),
					// };
					// use if you make favorites in the back end
					// fetch(process.env.BACKEND_URL + "/api/deletefav", opts)
					// 	.then((response) => response.json())
					// 	.then((data) => {
					// 		}
					// 	})
					// 	.catch((error) => { console.log(error); });
				// }
			// },
			updatePassword: async (token, password) => {
				console.log(token, password);
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					},
					body: JSON.stringify({
						password: password,
					}),
				};
				const res = await fetch(process.env.BACKEND_URL + "/api/recover-password", opts);
				if (res.status < 200 || res.status >= 300) {
					throw new Error("There was an error changing password");
				}
				const data = await res.json();

				return true;
			}
		}

	};
};

export default getState;