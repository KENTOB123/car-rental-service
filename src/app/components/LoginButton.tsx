import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../../../hooks/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


type Inputs = {
    firstname: string;
    familyname: string;
    email: string;
    password: string;
    confirmationPasword: string;
}

const LoginButton = async () => {

const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const auth = useAuth();
    const currentUser = useUser();

    const signup = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log('ユーザー登録成功');
        } catch (e) {
            console.error(e);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = ({
        email,
        password,
        confirmationPasword,
    }) => {
        if (password === confirmationPasword) {
            signup(email, password);
        } else {
            alert('パスワードが一致しません');
        }
    };

  return (
    <form className='flex flex-col justify-evenly items-center gap-5 bg-white p-8 rounded'>
        <span className='font-bold text-xl'>Login Here</span>
        <input 
            type="email" 
            placeholder='E-mail' 
            className='p-3 rounded border' 
            required
            {...register('email', { required: true })} 
            />
        <input 
            type="password" 
            placeholder='Password' 
            className='p-3 rounded border' 
            required
            {...register('password', { required: true })} 
            />
      <button type='submit' className='bg-blue-700 text-white px-12 text-xl rounded pt-1 pb-1'>Login</button>
    </form>
  );
}


export default LoginButton