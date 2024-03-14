'use client'

import { useEffect, useState } from 'react'

import { Editor } from './editor'

import { HocuspocusProvider } from '@hocuspocus/provider'

const id = Math.random().toString(36).slice(2)

export default function HomePage() {
    const [cursors, setCursors] = useState<{ id: string; x: number; y: number }[]>([])

    const [provider] = useState(
        () =>
            new HocuspocusProvider({
                url: 'ws://127.0.0.1:1234',
                name: 'example-document',

                onAwarenessChange: async ({ states }) => {
                    const positions = states
                        .filter((x) => x.cursor?.position)
                        .map((x) => ({ id: x.cursor.id, ...x.cursor.position }))

                    setCursors(positions)
                },
            }),
    )

    useEffect(() => {
        return () => {
            console.log('disconnecting')
            provider.disconnect()
        }
    }, [provider])

    useEffect(() => {
        function updateCursor(e: MouseEvent) {
            provider.setAwarenessField('cursor', {
                id,
                position: {
                    x: e.pageX,
                    y: e.pageY,
                },
            })
        }

        document.addEventListener('mousemove', updateCursor)

        return () => {
            document.removeEventListener('mousemove', updateCursor)
        }
    }, [provider])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex h-1/2 w-1/2 flex-col items-center justify-center border">
                <Editor provider={provider} />
            </div>
            {cursors
                .filter((x) => x.id !== id)
                .map(({ id, x, y }) => (
                    <div
                        key={id}
                        style={{
                            position: 'absolute',
                            top: y,
                            left: x,
                        }}
                    >
                        Id {id}
                    </div>
                ))}
        </main>
    )
}
