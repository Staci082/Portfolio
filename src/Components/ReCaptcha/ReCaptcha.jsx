/* eslint-disable no-undef */
import { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function ReCaptcha() {

  const sitekey = import.meta.env.VITE_SITE_KEY || process.env.VITE_SITE_KEY

  const recaptchaRef = useRef(null)

  useEffect(() => {
    recaptchaRef.current.execute()
  }, [])

  // const handleVerify = (token) => {
  //   if (onVerify) {
  //     onVerify(token)
  //   }
  // }

  return (
    <ReCAPTCHA 
      ref={recaptchaRef}
      sitekey={sitekey}
      size='invisible'

      // onChange={handleVerify}
    />
  )
}

export default ReCaptcha