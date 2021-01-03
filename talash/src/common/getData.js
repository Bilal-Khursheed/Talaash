class getName {
  Email() {
    var data = sessionStorage.getItem("hospital");
    var data1 = sessionStorage.getItem("Organization");
    var data3 = sessionStorage.getItem("Police");
    var data4 = sessionStorage.getItem("User");
    var namee = "bilal";
    console.log("working");
    if (data != undefined) {
      var data2 = JSON.parse(data);
      //var namee = "";
      console.log("working11");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["email"];
      //this.setState({name: namee})
      console.log("bilal is bandars " + i);
      console.log(namee);
      // }
      // return namee;
    } else if (data1 != undefined) {
      var data2 = JSON.parse(data1);
      //   var namee = "";
      console.log("working22");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["email"];
      //this.setState({name: namee})
      console.log("bilal is bandars " + i);
      console.log(namee);
      // return namee;
    } else if (data3 != undefined) {
      var data2 = JSON.parse(data3);

      console.log("working33");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["email"];
      //this.setState({name: namee})
      console.log("bilal is bandars " + i);
      console.log(namee);
    } else if (data4 != undefined) {
      var data2 = JSON.parse(data4);

      console.log("working33");

      //var detials=JSON.parse( data2.data)
      //var i = "";
      //for (i in data2) {
      namee = data2["email"];
      //this.setState({name: namee})
      // console.log("bilal is bandars " + i);
      console.log(namee);
    } else {
      console.log("not working");
    }
    return namee;
  }
  name() {
    var data = sessionStorage.getItem("hospital");
    var data1 = sessionStorage.getItem("Organization");
    var data3 = sessionStorage.getItem("Police");
    var data4 = sessionStorage.getItem("User");
    var namee = "Bilal";
    console.log("working");
    if (data != undefined) {
      var data2 = JSON.parse(data);
      //var namee = "";
      console.log("working11");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["name"];
      //this.setState({name: namee})
      console.log("NK " + i);
      console.log(namee);
      // }
      // return namee;
    } else if (data1 != undefined) {
      var data2 = JSON.parse(data1);
      //   var namee = "";
      console.log("working22");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["name"];
      //this.setState({name: namee})
      console.log("NK" + i);
      console.log(namee);
      // return namee;
    } else if (data3 != undefined) {
      var data2 = JSON.parse(data3);

      console.log("working33");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["name"];
      //this.setState({name: namee})
      console.log("NK is bandars " + i);
      console.log(namee);
    } else if (data4 != undefined) {
      var data2 = JSON.parse(data4);

      console.log("working33");

      //var detials=JSON.parse( data2.data)
      var i = "";
      //for (i in data2) {
      namee = data2["name"];
      //this.setState({name: namee})
      console.log("NK " + i);
      console.log(namee);
    } else {
      console.log("not working");
    }
    return namee;
  }
  signout() {
    sessionStorage.clear();
  }
}

export default new getName();
