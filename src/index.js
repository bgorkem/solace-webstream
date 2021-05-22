
import solace from 'solclientjs';
import credentials from '../credentials.json';

function connect() {
   solace.SolclientFactory.init({});
    var subscriber = solace.SolclientFactory.createSession(credentials);
     try {
        subscriber.connect();
     } catch (error) {
        console.log(error);
     }

     subscriber.on(solace.SessionEventCode.UP_NOTICE, function (sessionEvent) {
        console.log('connected, subscribing topic: tutorial/topic');
        subscriber.subscribe(solace.SolclientFactory.createTopic("tutorial/topic"),
                true,
                "tutorial/topic",
                10000); 
    
    });

    subscriber.on(solace.SessionEventCode.MESSAGE, function (message) {
        console.log('Received message: "' + message.getBinaryAttachment() + '", details:\n' + message.dump());
    });
}

console.log('connecting');
connect();