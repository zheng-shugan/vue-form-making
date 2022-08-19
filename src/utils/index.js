const loadJS = (url) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script')
		script.src = url
		script.type = 'text/javascript'
		document.body.appendChild(script)
		script.onload = () => {
			resolve()
		}
	})
}

const loadCSS = (url) => {
	return new Promise((resolve, reject) => {
		const link = document.createElement('link')
		link.rel = 'stylesheet'
		link.href = url
		document.head.appendChild(link)
		link.onload = () => {
			resolve()
		}
	})
}

const generateUUID = () => {
	let d = new Date().getTime()
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c === 'x' ? r : (r & 0x7 | 0x8).toString(16))
	})

	return uuid
}

export { request } from './request'

export {
	install,
	MakingForm,
	GenerateForm
} from './loadLanguage'

export {
	generateUUID,
	loadCSS,
	loadJS
}