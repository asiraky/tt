import { SQLite } from '@hocuspocus/extension-sqlite'
import { Server } from '@hocuspocus/server'

// Configure the server …
const server = Server.configure({
    name: 'hocuspocus-fra1-01',
    port: 1234,
    timeout: 30000,
    debounce: 1000,
    maxDebounce: 5000,
    quiet: false,

    extensions: [
        new SQLite({
            database: 'db.sqlite',
        }),
    ],

    onConnect: async () => {
        console.log('connections:', server.getConnectionsCount())
    },

    onDisconnect: async () => {
        console.log('disconnected:', server.getConnectionsCount())
    },

    onAwarenessUpdate: async ({ states }) => {
        console.dir(states, { depth: null })
    },
})

// … and run it!
server.listen()
