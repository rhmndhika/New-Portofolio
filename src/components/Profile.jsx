import React from 'react'
import './Profile.css'
import { Button} from '@chakra-ui/react'


export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highlighted-text'>Rahman Dhika</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        {/* <Typical 
                        loop={Infinity}
                        steps={[
                            "Front-End Developer",
                            1000
                        ]}
                        /> */}
                        <h2>Front-End Developer</h2>
                    </h1>
                    <span className='profile-description'>
                        Learning Website with ReactJS.
                    </span>
                </span>
            </div>
                <div className='profile-options'>
                        <a href='CV_Rahman_Dhika.pdf' download='CV_Rahman_Dhika.pdf'>
                            <Button className='btn-resume' colorScheme='blue'>
                                Get CV
                            </Button>
                        </a>
                </div>
            </div>
            <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
        </div>
    </div>
                      
  )
}
