// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import axios from "axios";
import { z } from "zod";
import { emailSchema } from "../mail";

type DataSchema = z.infer<typeof emailSchema>;

export async function sendMail([{name, email, message, subject}]: DataSchema[]): Promise<any>{
    const data = {
        name,
        email, 
        subject,
        message, 
    };
    
    const  res = await axios.post('/api/email', data);

    return res.status;
       
}