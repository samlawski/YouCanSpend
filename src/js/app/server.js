import * as firebase from "firebase";

class Server {
  constructor(){
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAoVdn36pNYEN6HHkuAGkccUySIgY0ESqY",
      authDomain: "youcanspend-test.firebaseapp.com",
      databaseURL: "https://youcanspend-test.firebaseio.com",
      storageBucket: "youcanspend-test.appspot.com",
      messagingSenderId: "38042327733"
    });

    this.current_user = this.authorizeAndReturn();
    this.db = firebase.database().ref(this.current_user);
  };

  authorizeAndReturn(){
    // TODO Implement proper authorization (on Firebase)
    return 'random_user_id_123'
  };



  // TODO Remove Dev Methods:
  seedDemoContent(){
    this.db.set({
      "Budget": {
        "1": {
          name: "groceries",
          amount: 123.34,
          balance: 44
        },
        "2": {
          name: "beer",
          amount: 212.34,
          balance: -23
        },
        "3": {
          name: "cars",
          amount: 9999.93,
          balance: 3342
        },
        "4": {
          name: "incusrance",
          amount: 123.34,
          balance: 44.23
        },
        "5": {
          name: "and",
          amount: 123.34,
          balance: 123
        }
      }
    });
  };

};

export default new Server();