import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/posts' , postRoutes);
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://Toni:toni1234@cluster0.sl6yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
 .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT}`)))
 .catch((error) => console.log(error.message));


 mongoose.set('useFindAndModify' , false);
