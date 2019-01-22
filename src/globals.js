const globals = {
  BACKEND_URL: process.env.NODE_ENV === 'production' ? 'http://www.crodity.com' : 'http://localhost:3000'
}

export default globals;