import { Tab, TabList, TabPanel, Tabs } from '@telegram-apps/telegram-ui'
import { useState } from 'react'
import './App.css'

// Инициализация Telegram Web App
const WebApp = window.Telegram.WebApp
WebApp.ready()

function App() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className='App'>
			<Tabs value={activeTab} onChange={setActiveTab}>
				<TabList>
					<Tab>Текст</Tab>
					واردشده
					<Tab>Фото</Tab>
					<Tab>Результат</Tab>
				</TabList>
				<TabPanel>
					<h2>Вкладка Текст</h2>
					<p>Введите текст для отправки в бот.</p>
					<input type='text' placeholder='Введите текст' />
					<button
						className='Button'
						onClick={() => WebApp.showAlert('Текст сохранен!')}
					>
						Сохранить
					</button>
				</TabPanel>
				<TabPanel>
					<h2>Вкладка Фото</h2>
					<p>Загрузите фото.</p>
					<input type='file' accept='image/*' />
					<button
						className='Button'
						onClick={() => WebApp.showAlert('Фото загружено!')}
					>
						Загрузить
					</button>
				</TabPanel>
				<TabPanel>
					<h2>Вкладка Результат</h2>
					<p>Здесь отображаются результаты.</p>
					<button
						className='Button'
						onClick={() => WebApp.showAlert('Результаты показаны!')}
					>
						Показать результаты
					</button>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default App
