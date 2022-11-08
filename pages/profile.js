import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from 'next/image'
export default function Profile() {
  const { data } = useSession();
  const [update, setUpdate] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()


    if (event.target.password.value != event.target.confirm_password.value) {
      setUpdate("error")
      setMessage("Las contraseñas no coinciden")
      return
    }

    // Get data from the form.
    const dataPost = {
      email: data.user.email,
      password: event.target.password.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(dataPost)

    // API endpoint where we send form data.
    const endpoint = '/app/api/profile'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
console.log(result)
    setMessage(result.message)
    if (result.error) {
      setUpdate("error")
    }
    setUpdate("success")

  }


  return <div>
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <Image src="/app/avatar.png" alt="Admin" className="rounded-circle" width={"150px"} height={"150px"}/>
              <div className="mt-3">
                <h4>{data.user.name}</h4>
                {/* <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                <span className="text-secondary">https://bootdey.com</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                <span className="text-secondary">bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
                <span className="text-secondary">@bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                <span className="text-secondary">bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                <span className="text-secondary">bootdey</span>
              </li>
            </ul>
          </div> */}
      </div>
      <div className="col-md-8">

        <div className="card mb-3">
          {update == "success" ? <div className="alert alert-success" role="alert">
            {message}
          </div> : null}

          {update == "error" ? <div className="alert alert-danger" role="alert">
            {message}
          </div> : null}

          <form onSubmit={handleSubmit}>
            <div className="card-body">
            <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Username</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.Username}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nombres</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.Me.name}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Apellidos</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.Me.lastname}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.Me.email}
                </div>
              </div>
              <hr />
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <h6 className="mb-0">Contraseña</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="password" className="form-control" name="password" id="inputPassword" />
                </div>
              </div>
              <hr />
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <h6 className="mb-0">Confirmar Contraseña</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="password" className="form-control" name="confirm_password" id="inputPassword" />
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-12">
                  <button className="btn btn-info " type="submit" >Actualizar</button>
                </div>
              </div>
            </div>

          </form>
        </div>

      </div>

    </div>
  </div>;

}
