import React, { useState } from "react"
import { connect, ConnectedProps } from "react-redux"
import { login } from "./Login.thunks"
import { Title } from "./Login.styles"
import { useHistory } from "react-router-dom"
import { PATH } from "src/constants/paths"

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = {
  login
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const Login = (props: Props) => {
  const { login, loading } = props
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const history = useHistory()
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loading) {
      const payload = { username, password }
      login(payload)
        .then(res => {
          history.push(PATH.HOME)
        })
        .catch(err => {
          setError(err.payload.message)
        })
    }
  }

  return (
    <div className="container">
      <div className="min-vh-100 row">
        <div className="col-md-6 m-auto">
          <form className="p-5 rounded-sm shadow text-center" onSubmit={submit}>
            <Title>Login</Title>
            <p className="text-muted">Please enter your login and password!</p>
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsername}
              className="form-control form-control-lg mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              className="form-control form-control-lg mb-4"
            />
            {error && (
              <div className="mb-3 text-danger text-xl-center">{error}</div>
            )}
            <button type="submit" className="btn btn-block btn-info btn-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connector(Login)
