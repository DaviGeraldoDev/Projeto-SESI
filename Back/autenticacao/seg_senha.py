import hashlib

def encrypt_md5(senha):
    senha_criptografada = hashlib.md5(senha.encode()).hexdigest()
    return senha_criptografada

def encrypt_sha256(senha):
    senha_criptografada = hashlib.sha256(senha.encode()).hexdigest()
    return senha_criptografada
