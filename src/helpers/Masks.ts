export const maskCpfCnpj = (v: string) => {
    v = v.replace(/\D/g, '')

    if (v.length <= 11) {
        v = v.replace(/(\d{3})(\d)/, '$1.$2')
        v = v.replace(/(\d{3})(\d)/, '$1.$2')
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else {
        v = v.replace(/^(\d{2})(\d)/, '$1.$2')
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
        v = v.replace(/(\d{4})(\d)/, '$1-$2')
    }

    return v
}

export const maskPhone = (v: string) => {
    v = v.replace(/\D/g, '')
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
    v = v.replace(/(\d)(\d{4})$/, '$1-$2')
    return v
}

export const maskCEP = (v: string) => {
    v = v.replace(/(\d{5})(\d{3})/, '$1-$2')
    return v
}
