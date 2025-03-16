const server_host =
  process.env.NEXT_PUBLIC_SERVER_HOST ?? 'http://localhost:8000'

const client_host =
  process.env.NEXT_PUBLIC_CLIENT_HOST ?? 'http://localhost:3000';

export { server_host, client_host };
