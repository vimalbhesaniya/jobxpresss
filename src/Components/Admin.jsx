import React, { useEffect } from "react";
import "../Style/admin.css";
import { useState } from "react";
import AdminHome from "./AdminHome";
import AdminCompanies from "./AdminCompanies";
import AdminUsers from "./AdminUsers";
function Admin() {

	const [view, setView] = useState("home");
	const screen = localStorage.getItem("admin");
	useEffect(() => {
		if (!screen) {
			window.location.replace("/login");
		}
	})
	const renderComponents = () => {


		switch (view) {
			case "home":
				return <AdminHome />;
			case "AdminUsers":
				return <AdminUsers />;
			case "AdminCompanies":
				return <AdminCompanies />;
			default:
				return "not found";
		}
	};
	return (
		<>
			<div className="container-fluid ">
				<div className="row">
					<div className="col-2 bg- admin---main  p-0">
						<ul className="list-group gap-2">
							<li
								className={view == "home" ? "list-group-item  list-group-item-info shdw-lg p-5 text-center mb-5 c-pointer  " : "list-group-item  p-5 text-center mb-5 c-pointer"}
								onClick={() => setView("home")}
							>
								<i className="fa fa-dashboard text-dark" /> DASHBOARD
							</li>
							<li
								className={
									view == "AdminUsers"
										? "list-group-item list-group-item-info p-4 shdw-lg  list-bg c-pointer"
										: "list-group-item p-4 list-bg c-pointer"
								}
								onClick={() => setView("AdminUsers")}
							>
								<i className="fa fa-users list-bg" /> USERS
							</li>
							<li
								className={
									view == "AdminCompanies"
										? "list-group-item list-group-item-info p-4 shdw-lg  list-bg c-pointer"
										: "list-group-item p-4 list-bg c-pointer"
								}
								onClick={() => setView("AdminCompanies")}
							>
								<i className="fa fa-industry" /> EMPLOYERS
							</li>
							<li
								className="admin---logout"
								onClick={() => {
									localStorage.removeItem("admin");
									window.location.replace("/login");
								}}
							>
								Log Out
							</li>
						</ul>
					</div>
					<div className="col-10 admin---tables ">{renderComponents()}</div>
				</div>
			</div>
		</>
	);
}

export default Admin;
