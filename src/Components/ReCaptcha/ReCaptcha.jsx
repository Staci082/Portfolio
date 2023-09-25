import { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function ReCaptcha({ sitekey,
  //  onVerify
   }) {

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