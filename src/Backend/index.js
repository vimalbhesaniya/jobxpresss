
const validator = require('validator');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/jobportle").then(()=>console.log("server started"));

//user schema-----------------------------------------------------
const UserSchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	education: { type: [String], required: true },
	experience: { type: [String], required: true },
	address: { type: String, required: true },
	location: { type: String, required: true },
	phone: {
		type: String, required: true,
		validate: {
			validator: function (e) {
				return e?.length == 10;
			},
			message: `Kindly provide a valid 10-digit mobile number `
		}

	},
	password: {
		type: String, required: true,
		validate: {
			validator: function (e) {
				return e.length >= 8;
			},
			message: "Password must be  8 to 16 digit"
		}

	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: `Not a valid email address!`,
			kind: "required"
		}
	},
	name: { type: String, required: true },
	skills: {
		type: [String],
		required: true,
		validate: {
			validator: function (e) {
				return e[0]?.length > 0;
			},
			message: `required`
		}
	},
	profession: {
		type: String, required: true,
		validate: {
			validator: function (e) {
				return e != "1"
			},
			message: `please choose a profession`
		}
	},
});
const User = mongoose.model('seekers', UserSchema);
User.createIndexes();

//COMPANY_Table schema---------------------------------------------
const companySchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	company_name: {
		type: String,
		required: true,
		trim: true,
	},
	industry: {
		type: String,
		required: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: `Not a valid email address!`,
			kind: "required"
		}
	},
	password: {
		type: String, required: true,
		validate: {
			validator: function (e) {
				return e.length >= 8;
			},
			message: "Password must be  8 to 16 digit"
		}

	},
	contact_phone: {
		type: String, required: true,
		validate: {
			validator: function (e) {
				return e?.length == 10;
			},
			message: `Kindly provide a valid 10-digit mobile number `
		}
	}
});

const Company = mongoose.model('company', companySchema);
Company.createIndexes();

// Company Othre details-------------------------------------------

const cdschemas = new mongoose.Schema({
	company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'company', // Reference to the Company
	},
	aboutus: String,
	mission: String,
	whyworkwithus: String,
	currentopenings: String,
	contactus: [String],
	established_year: Number,
	website: {
		type: String,
	},
	social_media_links: [String]
});

const CompanyDetails = mongoose.model('companydetails', cdschemas);
CompanyDetails.createIndexes();

//joblisting---------------------------------------------------------------
const jobListingSchema = new mongoose.Schema({
	jobTitle: {
		type: String,
		required: true
	},
	company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'company', // Reference to the Company model
	},
	location: {
		type: String,
	},
	jobType: {
		type: [String],
	},
	postedOn: {
		type: Date,
	},
	applicationDeadline: {
		type: String,
	},
	jobDescription: {
		type: String,
	},
	requirements: {
		type: String,
	},
	responsibilities: {
		type: String,
	},
	benefits: {
		type: String,
	},
	howToApply: {
		type: String,
	}
	, salary: {
		type: String,
	}
});

const JobListing = mongoose.model('JobListing', jobListingSchema);
JobListing.createIndexes();
// Job Application table---------------------------------------------------


const jobApplicationSchema = new mongoose.Schema({
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'seekers',
	},
	cid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'company',
	},
	jobid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'JobListing',
		message: "You are already applied for this job"
	},
	status: {
		type: String,
		enum: ['Pending', 'Accepted', 'Rejected'],
		default: 'Pending',
	},
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
JobApplication.createIndexes();


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/seekers", async (req, resp) => {
	const my = await User.find();
	resp.send(my);
});
app.get("/company", async (req, resp) => {
	const my = await Company.find();
	resp.send(my);
});
app.get("/seekers/id/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await User.find({ _id: id });
	resp.send(sdata);
});
app.get("/jobapplication/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await JobApplication.find({ jobid: id });
	resp.send(sdata);
});
app.get("/jobapplication", async (req, resp) => {
	const sdata = await JobApplication.find().select("jobid");
	resp.send(sdata);
});
app.get("/jobapplication/user/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await JobApplication.find({uid : {_id : id}});
	resp.send(sdata);
});
app.get("/allapplications", async (req, resp) => {
	const sdata = await JobApplication.find().populate(["uid", "cid", "jobid"]);
	resp.send(sdata);
});
app.get("/allapplications/company/:id", async (req, resp) => {
	const id = req.params.id
	const sdata = await JobApplication.find({ cid: id }).populate(["uid", "cid", "jobid"]);
	resp.send(sdata);
});
app.get("/allapplications/company/full/:id", async (req, resp) => {
	const id = req.params.id
	const sdata = await JobApplication.find({ cid: id });
	resp.send(sdata);
});
app.get("/allapplications/user/:id", async (req, resp) => {
	const id = req.params.id
	const sdata = await JobApplication.find({ uid: id }).populate(["uid", "cid", "jobid"]);
	resp.send(sdata);
});


app.get("/company/id/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await Company.find({ _id: id });
	resp.send(sdata);
});
app.get("/jobs", async (req, resp) => {
	// const id = req.params.id;
	const sdata = await JobListing.find().populate('company');
	resp.send(sdata);
});
app.get("/jobs/id/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await JobListing.find({ _id: id }).populate('company');
	resp.send(sdata);
});
app.get("/jobs/cid/:id", async (req, resp) => {
	const id = req.params.id;
	const sdata = await JobListing.find({ company: id }).populate('company');
	resp.send(sdata);
});
app.get("/company/details", async (req, resp) => {
	const sdata = await CompanyDetails.find().populate('company');;
	resp.send(sdata);
});
app.get("/company/details/:id", async (req, resp) => {
	const id = req.params.id
	const sdata = await CompanyDetails.find({ company: { _id : id} }).populate('company');
	resp.send(sdata);
});



app.post("/seekers", async (req, res) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		res.send(result);
	} catch (e) {
		console.log(e);
		res.send(e);
	}
});
app.post("/jobapplication", async (req, res) => {
	try {
		const user = new JobApplication(req.body);

		let result = await user.save();
		result = result.toObject();
		res.send(result);
		// }
	} catch (e) {
		console.log(e);
		res.send(e);
	}
});


app.post("/company", async (req, res) => {
	try {
		const user = new Company(req.body);
		let result = await user.save();
		result = result.toObject();
		res.send(result);
	} catch (e) {
		res.send(e);
	}
});

app.post("/company/details/", async (req, res) => {
	try {
		const user = new CompanyDetails(req.body);
		let result = await user.save();
		result = result.toObject();
		res.send(result);
	} catch (e) {
		res.send(e);
	}
});

app.post("/joblisting", async (req, res) => {
	try {
		const job = new JobListing(req.body);
		let result = await job.save();
		result = result.toObject();
		res.send(result);
	} catch (e) {
		// console.log(res);
		// console.log(e)
		res.send(e);
	}
});
app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = User.findOne({ email: username, password: password })
		.then(user => {
			if (!user) {
				return res.json({ error: 'Invalid Username or Password' });
			}
			else {
				return res.json({ message: user._id });
			}
		})
		.catch(err => {
			console.error('Error during login:', err);
			res.status(500).json({ error: 'An error occurred during login' });
		});
});
app.post('/loginAsCompany', (req, res) => {
	const { username, password } = req.body;
	const user = Company.findOne({ email: username, password: password })
		.then(user => {
			if (!user) {
				return res.json({ error: 'Invalid Username or Password' });
			}
			else {
				return res.json({ message: user._id });
			}
		})
		.catch(err => {
			console.error('Error during login:', err);
			res.status(500).json({ error: 'An error occurred during login' });
		});
});

app.put('/seekers/id/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const newData = req.body;
		const person = await User.updateOne({ _id: id }, newData, { new: true });

		if (!person) {
			return res.status(404).json({ error: 'Person not found' });
		}

		res.json({ message: 'Person updated successfully', person });
	} catch (error) {
		console.error('Error updating person:', error);
		res.status(500).json({ error: 'An error occurred while updating the person' });
	}
});
app.put('/jobapplication/id/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const newData = req.body;
		const person = await JobApplication.updateOne({  _id : id }, newData, { new: true });
		if (!person) {
			return res.status(404).json({ error: 'Person not found' });
		}

		res.json({ message: 'Person updated successfully', person });
	} catch (error) {
		console.error('Error updating person:', error);
		res.status(500).json({ error: 'An error occurred while updating the person' });
	}
});
app.put('/company/details/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const newData = req.body;
		const person = await CompanyDetails.updateOne({ _id: id }, newData, { new: true });
		if (!person) {
			return res.status(404).json({ error: 'Person not found' });
		}
		res.json({ message: 'Person updated successfully', person });
	} catch (error) {
		console.error('Error updating person:', error);
		res.status(500).json({ error: 'An error occurred while updating the person' });
	}
});


app.get('/profiles/id/:id', async (req, res) => {
	const loggedInUserId = req.params.id;
	const othreusers = await User.find({ id: { $ne: loggedInUserId } })
	res.send(othreusers);
});
app.get('/profiles/id/:id/:limit', async (req, res) => {
	const loggedInUserId = req.params.id;
	const limit = req.params.limit
	const othreusers = await User.find({ id: { $ne: loggedInUserId } }).limit(limit)
	res.send(othreusers);
});

app.get('/search/:q', async (req, res) => {
	const searchText = req.params.q;

  try {
    let query = {}; 
    if (searchText) {
      query = {
        $or: [
          { company_name: { $regex: searchText, $options: 'i' } }
        ],
      };
    }
    const searchResult = await Company.find(query);

    res.json(searchResult);
	} catch (error) {
		console.error('Error searching:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});


app.get('/search/user/:q', async (req, res) => {
	const searchText = req.params.q;

  try {
    let query = {}; 

    if (searchText) {
      query = {
        $or: [
          { name: { $regex: searchText, $options: 'i' } }
        ],
      };
    }
    const searchResult = await User.find(query);

    res.json(searchResult);
	} catch (error) {
		console.error('Error searching:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});
app.delete("/delete/app/:id" , async (req , res) =>{
const id = req.params.id;
await JobApplication.deleteOne({_id: id} );
})
app.delete("/delete/job/:id" , async (req , res) =>{
const id = req.params.id;
await JobListing.deleteOne({_id: id} );
})
app.delete("/delete/app/c/:id" , async (req , res) =>{
const id = req.params.id;
await JobApplication.deleteOne({jobid: id});
})

app.get('/search/admin/user/:q', async (req, res) => {
	const searchText = req.params.q;
  try {
    let query = {}; 

    if (searchText) {
      query = {
        $or: [
          { name: { $regex: searchText, $options: 'i' } },
          { email: { $regex: searchText, $options: 'i' } },
          { location: { $regex: searchText, $options: 'i' } },
          { phone: { $regex: searchText, $options: 'i' } },
          { profession: { $regex: searchText, $options: 'i' } }
        ],
      };
    }
    const searchResult = await User.find(query);

    res.json(searchResult);
	} catch (error) {
		console.error('Error searching:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});
app.get('/search/admin/company/:q', async (req, res) => {
	const searchText = req.params.q;
  try {
    let query = {}; 

    if (searchText) {
      query = {
        $or: [
          { company_name: { $regex: searchText, $options: 'i' } },
          { email: { $regex: searchText, $options: 'i' } },
          { location: { $regex: searchText, $options: 'i' } },
          { industry: { $regex: searchText, $options: 'i' } },
          { contact_phone: { $regex: searchText, $options: 'i' } },
        ],
      };
    }
    const searchResult = await Company.find(query);

    res.json(searchResult);
	} catch (error) {
		console.error('Error searching:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});
app.delete("/delete/seekers/:id" , async (req , res ) =>{
	try
	{
		const id =req.params.id; 
		await User.deleteOne({_id : id});
		const users = await User.find({});
		res.send(users);
	}
	catch(e){
		res.send(e);
	}

})
app.delete("/delete/company/:id" , async (req , res ) =>{
	try
	{
		const id =req.params.id; 
		await Company.deleteOne({_id : id});
		const c = await Company.find({});
		res.send(c);
	}
	catch(e){
		res.send(e);
	}

})


app.listen(8000);
