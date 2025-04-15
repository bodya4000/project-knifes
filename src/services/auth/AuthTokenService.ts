class AuthService {
	private readonly STORAGE_KEY = 'access_token'

	public async saveToken(token: string) {
		try {
			localStorage.setItem(this.STORAGE_KEY, token)
		} catch (_) {
			console.error('Could not save token')
			throw new Error('Could not save token')
		}
	}

	public clearToken() {
		try {
			console.log('clearing token')
			localStorage.setItem(this.STORAGE_KEY, JSON.stringify(null))
		} catch (_) {
			console.error('Could not clear token')
			throw new Error('Could not clear token')
		}
	}

	public getToken() {
		try {
			const token = localStorage.getItem(this.STORAGE_KEY)
			return token
		} catch (_) {
			console.error('Could not get token')
			throw new Error('Could not get token')
		}
	}
}

export default new AuthService()
