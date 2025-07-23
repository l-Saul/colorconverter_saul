def hextorgb():
    while True:
        hex = input("digite o código da cor HEX (ex: #000000): ")
        if not (hex.startswith("#") and len(hex) == 7):
            print("Erro: Código HEX precisa começar com '#' e ter 6 caracteres.")
            continue
        break
    
    hex_r = hex[1:3]
    hex_g = hex[3:5]
    hex_b = hex[5:7]

    rgb_r = int(hex_r, 16)
    rgb_g = int(hex_g, 16)
    rgb_b = int(hex_b, 16)

    print(f"Para o código HEX {hex}:")
    print(f"rgb({rgb_r}, {rgb_g}, {rgb_b})")
    print(f"Red: {rgb_r}")
    print(f"Green: {rgb_g}")
    print(f"Blue: {rgb_b}")

def rgbtohex ():
    def validarRGB(nome):
        while True:
            cor = input(f"Digite o código da cor RGB {nome} (0-255): ")
            try:
                num = int(cor)
                if 0 <= num <= 255:
                    return num
                else:
                    print("Erro: precisa estar entre 0 e 255.")
            except ValueError:
                print("Erro: precisa estar entre 0 e 255.")

    red = validarRGB("RED")
    green = validarRGB("GREEN")
    blue = validarRGB("BLUE")

    hex_red = f"{red:02X}"
    hex_green = f"{green:02X}"
    hex_blue = f"{blue:02X}"

    print(f"Para o código RGB ({red}, {green}, {blue}):")
    print(f"HEX: #{hex_red}{hex_green}{hex_blue}")

def iniciar():
    print("Conversor de Cores")
    print("1 - HEX para RGB")
    print("2 - RGB para HEX")

    while True:
        escolha_usuario = input("Digite a opção desejada: ")
        try:
            escolha_usuario = int(escolha_usuario)
            if escolha_usuario == 1:
                hextorgb()
                break
            elif escolha_usuario == 2:
                rgbtohex()
                break
            else:
                print("Opção inválida, deve ser 1 ou 2.")
        except ValueError: 
            print("Opção inválida, deve ser 1 ou 2.")

iniciar()