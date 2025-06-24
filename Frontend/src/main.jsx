import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { UserContexProvider } from './context/authUser.jsx'
import { Toaster } from 'react-hot-toast'
import { SocketContextProvider } from './context/useSocketContext.jsx'
import './index.css'
import { ChatProvider } from './context/chatContext.jsx'
import { registerSW } from 'virtual:pwa-register'
import { BrowserRouter } from 'react-router-dom'

registerSW()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContexProvider>
          <ChatProvider>
            <SocketContextProvider>

              <App />
              <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    margin: "1rem 0 0 0",
                    maxWidth: "28rem",
                    minWidth: "250px",
                    padding: "12px 16px",
                  },
                }}
              />
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </SocketContextProvider>
          </ChatProvider>
        </UserContexProvider>
      </QueryClientProvider>
    </BrowserRouter> 
  // </StrictMode>, 
)
