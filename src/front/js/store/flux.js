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
			randomUser: []

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
							email: email,
							password: password,
							UserName: UserName,
							DateOfBirth: DateOfBirth
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
			}
		}

	};
};

export default getState;