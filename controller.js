const {
  insertLoginDetails,
  getLoginDetails,
  insertCompanyDetails,
  getCompanyDetails,
  updateCompanyDetails,
  deleteCompanyDetails,
  insertEmployeeDetails,
  getEmployeeDetails,
  updateEmployeeDetails,
  deleteEmployeeDetails,
  searchAll
} = require("./database/mongoquery");

exports.homepage = async (req, res) => {
  res.send("HOMEPAGE!");
};

exports.login = async (req, res) => {
  console.log(req.body);
  if (req.body.type == "admin") {
    res.send({ code: 200, message: "Logged in successfully!" });
  } else {
    res.send({ code: 400, message: "You dont have access!" });
  }
  // await insertLoginDetails({name: 'Admin', type: 'admin', pass: '123456'});
  //   res.send(await getLoginDetails())
};


//add company
exports.insertCompany = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      success: "false",
      message: "Name is required",
    });
  } else if (!req.body.type) {
    return res.status(400).send({
      success: "false",
      message: "Type is required",
    });
  } else if (!req.body.address) {
    return res.status(400).send({
      success: "false",
      message: "Address is required",
    });
  } else {
    let data = {
      name: req.body.name,
      type: req.body.type,
      address: req.body.address,
    };

    await insertCompanyDetails(data);

    res.send(JSON.stringify("Company Addedd Successfully!"));
  }
};

//view company
exports.viewcompany = async (req, res) => {
  res.send(await getCompanyDetails());
};

//update company
exports.updatecompany = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(1111);

  if (!req.body.name) {
    return res.status(400).send({
      success: "false",
      message: "Name is required",
    });
  } else if (!req.body.type) {
    return res.status(400).send({
      success: "false",
      message: "Type is required",
    });
  } else if (!req.body.address) {
    return res.status(400).send({
      success: "false",
      message: "Address is required",
    });
  } else {
    let data = {
      name: req.body.name,
      type: req.body.type,
      address: req.body.address,
    };

    await updateCompanyDetails(req.params.id, data);
  }
  res.send(JSON.stringify("Updated Successfully"));
};

//delete company
exports.deletecompany = async (req, res) => {
  await deleteCompanyDetails(req.params.id)
  res.send(JSON.stringify("Deleted Successfully!"));
};




//add employee
exports.insertEmployee = async (req, res) => {
    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "Name is required",
      });
    } else if (!req.body.manager) {
      return res.status(400).send({
        success: "false",
        message: "Manager is required",
      });
    } else if (!req.body.address) {
      return res.status(400).send({
        success: "false",
        message: "Address is required",
      });
    } else if (!req.body.cname) {
        return res.status(400).send({
          success: "false",
          message: "Company name is required",
        });
      } 
      else if (!req.body.eid) {
        return res.status(400).send({
          success: "false",
          message: "Employee ID is required",
        });
      }  else {
      let data = {
        name: req.body.name,
        manager: req.body.manager,
        address: req.body.address,
        cname: req.body.cname,
        eid: req.body.eid,
        phone: req.body.phone

      };
  
      await insertEmployeeDetails(data);
  
      res.send(JSON.stringify("User Addedd Successfully!"));
    }
  };
  
  //view employee
  exports.viewEmployee = async (req, res) => {
    res.send(await getEmployeeDetails());
  };
  
  //update employee
  exports.updateEmployee = async (req, res) => {
    
  
    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "Name is required",
      });
    } else if (!req.body.manager) {
      return res.status(400).send({
        success: "false",
        message: "Manager is required",
      });
    } else if (!req.body.address) {
      return res.status(400).send({
        success: "false",
        message: "Address is required",
      });
    
    } else if (!req.body.cname) {
        return res.status(400).send({
          success: "false",
          message: "Company name is required",
        });
      } 
      else {
      let data = {
        name: req.body.name,
        manager: req.body.manager,
        address: req.body.address,
        cname: req.body.cname,
        eid: req.body.eid,
        phone: req.body.phone
      };
  
      await updateEmployeeDetails(req.params.id, data);
    }
    res.send(JSON.stringify("Updated Successfully"));
  };
  
  //delete employee
  exports.deleteEmployee = async (req, res) => {
    await deleteEmployeeDetails(req.params.id)
    res.send(JSON.stringify("Deleted Successfully!"));
  };


  exports.searchAll = async (req, res) => {
        console.log(req.body);
        res.send(await searchAll(req.body.SearchString));
    
  }