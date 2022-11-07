import mongoose from 'mongoose'

const Connection = async(username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@blog-app.sje3o20.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@blogapp.hl9hvwr.mongodb.net/?retryWrites=true&w=majority`;
    // console.log(URL);
    try {
        
        await mongoose.connect(URL , {
            useNewUrlParser:true,
            
        })
        console.log('Database connected successfully ');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;