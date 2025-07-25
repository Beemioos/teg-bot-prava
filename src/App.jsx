import { AppRoot, Button, Text } from '@telegram-apps/telegram-ui'
import { useState } from 'react'

const App = () => {
	const [tab, setTab] = useState('text')

	return (
		<AppRoot>
			<div style={{ paddingBottom: '60px', padding: '16px' }}>
				{tab === 'text' && <Text>Здесь будет текст</Text>}
				{tab === 'photo' && <Text>Здесь будет фото</Text>}
				{tab === 'result' && <Text>Здесь будет результат</Text>}
			</div>

			<div
				style={{
					position: 'fixed',
					bottom: 0,
					width: '100%',
          margin:0,
					display: 'flex',
					justifyContent: 'space-around',
					padding: '8px 0',
					background: 'var(--tg-theme-bg-color)',
				}}
			>
				<Button
					size='m'
					mode={tab === 'text' ? 'primary' : 'secondary'}
					onClick={() => setTab('text')}
				>
					Текст
				</Button>
				<Button
					size='m'
					mode={tab === 'photo' ? 'primary' : 'secondary'}
					onClick={() => setTab('photo')}
				>
					Фото
				</Button>
				<Button
					size='m'
					mode={tab === 'result' ? 'primary' : 'secondary'}
					onClick={() => setTab('result')}
				>
					Результат
				</Button>
			</div>
		</AppRoot>
	)
}

export default App
