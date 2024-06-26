/**
 * crypto模块的目的是为了提供通用的加密和哈希算法。
 * 1.对称加密
 * 2.非对称加密
   3.哈希函数
 */
const crypto = require('node:crypto')

//  1.对称加密   双方协商定义一个密钥以及初始化向量（iv）
/**
 * 
 */


// // 生成一个随机的16字节 的初始化向量（IV）保证我们每次生成的密钥串是不一样的， 密钥串缺少位数 还可以进行补码
// const iv = Buffer.from(crypto.randomBytes(16))

// // 生成一个随机的 32 字节 密钥
// const key = crypto.randomBytes(32)

// // 创建加密实例 使用AES-256-cbc算法  提供密钥和初始化向量
// const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

// // 对输入数据进行加密 并输出加密结果的十六进制（hex）表示 
// cipher.update('小茗', 'utf-8', 'hex')
// const result = cipher.final('hex')
// console.log(result); // e9cb2a215dc033c78b6d044959b0b138

// // 解密
// const de = crypto.createDecipheriv('aes-256-cbc', key, iv)
// de.update(result, 'hex')
// const decrypted = de.final('utf-8')

// console.log(decrypted);
/**
 * 对称加密是一种简单而快速的加密方式，它使用相同的密钥（称为对称密钥）来进行加密和解密。
 * 这意味着发送者和接收者在加密和解密过程中都使用相同的密钥。
 * 场景：对称加密算法的加密速度很快，适合对大量数据进行加密和解密操作。
 *      然而，对称密钥的安全性是一个挑战，因为需要确保发送者和接收者都安全地共享密钥，否则有风险被未授权的人获取密钥并解密数据。
 */

// 2.非对称加密
/**
 * 
 * 非对称加密使用一对密钥，分别是公钥和私钥。发送者使用接收者的公钥进行加密，
 * 而接收者使用自己的私钥进行解密(只能管理员拥有)。公钥可以自由分享给任何人，而私钥必须保密。
 * 非对称加密算法提供了更高的安全性，因为即使公钥泄露，只有持有私钥的接收者才能解密数据。
 * 然而，非对称加密算法的加密速度相对较慢，不适合加密大量数据。
 * 因此，在实际应用中，通常使用非对称加密来交换对称密钥，然后使用对称加密算法来加密实际的数据。

 */

// // 生成PSA 密钥对
// const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
//     modulusLength: 2048 // 长度越长越安全， 越慢
// })

// // 要加密的数据
// const text = '小茗'

// // 使用公钥进行加密，用 key 加密 buffer 的内容，并返回带有加密内容的新 Buffer。 返回的数据可以使用相应的私钥解密
// const enctypted = crypto.publicEncrypt(publicKey, Buffer.from(text, 'utf-8'))
// console.log(enctypted.toString('hex')); // 显示16进制

// // 使用私钥解密
// const decrypted = crypto.privateDecrypt(privateKey, enctypted)
// console.log(decrypted.toString('utf-8')); //  小茗


// 3.哈希函数
/**
 * 哈希函数具有以下特点：
    1.固定长度输出：不论输入数据的大小，哈希函数的输出长度是固定的。例如，常见的哈希函数如 MD5 和 SHA-256 生成的哈希值长度分别为 128 位和 256 位。
    2.不可逆性：哈希函数是单向的，不可被解密，意味着从哈希值推导出原始输入数据是非常困难的，几乎不可能。即使输入数据发生微小的变化，其哈希值也会完全不同。
    3.唯一性：哈希函数应该具有较低的碰撞概率，即不同的输入数据生成相同的哈希值的可能性应该非常小。这有助于确保哈希值能够唯一地标识输入数据
   
   使用场景
    我们可以避免密码明文传输 使用md5加密或者sha256
    验证文件完整性，读取文件内容生成md5 如果前端上传的md5和后端的读取文件内部的md5匹配说明文件是完整的
 */

// 要计算的哈希的数据
let text = '123456'
// 创建哈希对象 并使用md5 算法
const hash = crypto.createHash('sha256') // sha256   md5

// 更新哈希对象的数据
hash.update(text)

// 计算哈希值 并以十六进制字符串形式输出
const hashValue = hash.digest('hex')
console.log(hashValue); 
// 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92 e10adc3949ba59abbe56e057f20f883e