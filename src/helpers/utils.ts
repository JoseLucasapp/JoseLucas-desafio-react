export const changeColor = (theme: string) => theme === 'dark' ? '#171515' : '#FFFFFF'
export const changeColorInverted = (theme: string) => theme === 'dark' ? 'white' : '#171515'
export const changeSvgColor = (theme: string) => theme === 'dark' ? '#8b949e' : '#171515'
export const changeRepositoryNumberColor = (theme: string) => theme === 'dark' ? '#c9d1d9' : '#171515'
export const changeFollowBtnStyle = (theme: string) => {
    const root: any = document.querySelector(':root');
    if (theme === 'dark') {
        root.style.setProperty('--color-btn-hover-bg', '#30363d')
        root.style.setProperty('--color-btn-hover-border', '#8b949e')
        root.style.setProperty('--color-btn-text', '#c9d1d9')
        root.style.setProperty('--color-btn-bg', '#21262d')
        root.style.setProperty('--color-btn-border', 'rgba(240, 246, 252, 0.1)')
    } else {
        root.style.setProperty('--color-btn-hover-bg', '#f3f4f6')
        root.style.setProperty('--color-btn-hover-border', 'rgba(27,31,36,0.15)')
        root.style.setProperty('--color-btn-text', '#24292f')
        root.style.setProperty('--color-btn-bg', '#f6f8fa')
        root.style.setProperty('--color-btn-border', 'rgba(27, 31, 36, 0.15)')
    }
}

export const getDifferenceInDays = (date: string) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const currentDate: any = mm + '/' + dd + '/' + yyyy;

    const date1: any = new Date(date.split('T')[0].replace('-', '/'));
    const date2: any = new Date(currentDate);

    const diffInMs = Math.abs(date2 - date1)
    return diffInMs / (1000 * 60 * 60 * 24);
}