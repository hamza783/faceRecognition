import React from 'react'

const SignIn = ({onRouteChange}) => {
    return (
        <article className="br3 ba dark-gray b--white-20 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" 
                            onClick={() => onRouteChange('home')}
                            value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3 pointer">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim white db">Register</p>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default SignIn;