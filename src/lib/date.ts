export function formatRelativeDate(date: Date) {
	const prev = new Date(date)
	const now = new Date()
	const diffInSeconds = Math.floor((now.getTime() - prev.getTime()) / 1000)

	if (diffInSeconds < 60) {
		return `${diffInSeconds} seconds ago`
	} else if (diffInSeconds < 3600) {
		const diffInMinutes = Math.floor(diffInSeconds / 60)
		return `${diffInMinutes} minutes ago`
	} else if (diffInSeconds < 86400) {
		const diffInHours = Math.floor(diffInSeconds / 3600)
		return `${diffInHours} hours ago`
	} else {
		const dateFormatter = new Intl.DateTimeFormat('en', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		})
		return dateFormatter.format(prev)
	}
}
