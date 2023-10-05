import React, { Component } from 'react';
import bgimg from "../assets/img1.jpg";
import {useForm} from 'react-hook-form';

export default function Form() {

    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const onSubmit = data =>console.log(data);

    // console.log(watch('username'));

        return (
            <section>
           <div className="register">
               <div className="col-1">
                  <h1>Se connecter</h1>
                  <span>Connectes toi et profites-en!</span>

                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" {...register("username")} placeholder='nom utilisateur' />
                      <input type="text" {...register("password")} placeholder='mot de pass' />
                      <input type="text" {...register("confirm")} placeholder='Confirmer mot de pass' />
                      <input type="text" {...register("mobile", {required:true, maxLength:10})} placeholder='numero telephone' />

                      {errors.mobile?.type === "required" && "Le numero de telephone est requis"}
                      {errors.mobile?.type === "maxLength" && "Taille maximale depasse"}
                      <button className="btn">Se connecter</button>

                  </form> 
               </div>
               <div className="col-2">
                   <img src={bgimg} alt="monimage" />
               </div>
           </div>
            </section>
        );
    
}