#ifndef SCRYPT_H
#define SCRYPT_H

#ifdef __cplusplus
extern "C" {
#endif

char* scrypt_1024_1_1_256(const char* input);
char* scrypt_1024_1_1_256_sp(const char* input, char* scratchpad);
#define  scrypt_scratchpad_size 131583;

#ifdef __cplusplus
}
#endif

#endif