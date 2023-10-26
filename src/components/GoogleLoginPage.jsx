import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import App from '../App';
import jwt_decode from "jwt-decode";

const GoogleLoginPage = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {

    const userObject = jwt_decode(response.credential);

    localStorage.setItem('user', JSON.stringify(userObject));
    const { email, name, sub, picture } = userObject;
    const doc = {
      _id: sub,
      userName: name,
      email: email,
      _type: 'user',
      image: picture,
    };
    App.createIfNotExists(doc).then(() => {
      navigate('/Main', { replace: true });
    });

  }

  return (
    <div className="">
          <div className="">
            <GoogleOAuthProvider 
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                >
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                </button>
              )}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID + ''}
              buttonText="구글 계정 로그인"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
          </div>
    </div>
  )
}

export default GoogleLoginPage