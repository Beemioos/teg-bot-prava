import { useEffect } from 'react'

const tg = window.Telegram.WebApp

const App = () => {
	useEffect(() => {
		tg.ready()
	}, [])

	const onClose = () => {
		tg.close()
	}

	const sendMessage = async () => {
		try {
			const response = await fetch(
				'https://cf2164a07496.ngrok-free.app/send-message',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						chatId: tg.initDataUnsafe?.user?.id || 'test',
						message: 'Hello from Mini App!',
					}),
				}
			)
			const result = await response.json()
			console.log(result)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<div>
			App
			<button onClick={onClose}>Close</button>
			<button onClick={sendMessage}>Send</button>
		</div>
	)
}

export default App
