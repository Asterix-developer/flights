export const getTransferText = (transfersLength: number) => {
    if (transfersLength > 1)
        return `${transfersLength} пересадки`
    else if (transfersLength == 0) {
        return 'без пересадок'
    } else if (transfersLength == 1) {
        return '1 пересадка'
    }
    return ''
}