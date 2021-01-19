export const DATA = [
  // 连线
  { type: 'line', from: [2, 0, 0], to: [5.5, 0, 0] },
  { type: 'line', from: [-2, 0, 0], to: [-5.5, 0, 0] },
  { type: 'line', from: [0, 0, -5], to: [0, 0, -6.5] },
  { type: 'line', from: [0, 0, -8.5], to: [0, 0, -12] },
  { type: 'line', from: [0, 0, 5], to: [0, 0, 7] },
  { type: 'line', from: [0, 0, 7], to: [-5.25, 0, 7] },
  { type: 'line', from: [0, 0, 7], to: [5.25, 0, 7] },
  { type: 'line', from: [-6, 0, 7], to: [-6, 0, 8.5] },
  { type: 'line', from: [6, 0, 7], to: [6, 0, 9] },
  { type: 'line', from: [9, 0, -10], to: [-9, 0, -10] },
  { type: 'line', from: [9, 0, -10], to: [9, 0, -12] },
  { type: 'line', from: [-9, 0, -10], to: [-9, 0, -12] },

  // 底座
  { type: 'plant', size: [2.4, 0.5, 2.4], position: [0, 0.25, -2.5], bgcolor: 0x2c55d6, text: '底座', opacity: 0.7 },
  { type: 'plant', size: [2.4, 0.5, 2.4], position: [0, 0.25, 2.5], bgcolor: 0x2c55d6, text: '底座', opacity: 0.7  },
  { type: 'plant', size: [2, 0.5, 2], position: [-6.5, 0.25, 0], bgcolor: 0x2c55d6, text: '底座', opacity: 0.7  },

  // 横向攻击
  // ip1端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: 'IP1', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100', opacity: 0.9  },
  // ip2端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: 'IP2', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100' , opacity: 0.9 },
  // ip3端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: 'IP3', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80', opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100' , opacity: 0.9 },
  // ip4端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: 'IP4', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600' , opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100' , opacity: 0.9 },

  // 攻击链
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '侦察', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '工具制作', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '投送', opacity: 0.9 },
  { type: 'block', size: [2, 0.5, 2], position: [6.5, 0.25, 0], bgcolor: 0x2c55d6, text: '攻击渗透', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '安装' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '执行活动', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '目标行动', opacity: 0.9 },

  // 侦察ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '侦察', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3', opacity: 0.9 },
  // 工具制作ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '工具制作', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5' , opacity: 0.9},
  // 投送ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '投送', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3', opacity: 0.9 },
  // 攻击渗透ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '攻击渗透', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },
  // 安装ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '安装', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },
  // 执行活动ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '执行活动', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3' , opacity: 0.9},
  // 目标行动ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '目标行动', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },

  // 入端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100' , opacity: 0.9},

  // 出端口
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '80', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '8080' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '200' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '600', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '100' , opacity: 0.9},

  // 异常行为链
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常行为链', opacity: 0.3   },

  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '提权' , opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '异常脚本下载' , opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '挖矿外联' , opacity: 0.9  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '横向暴力破解' , opacity: 0.9  },

  // 环境感知区
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '环境感知区' , opacity: 0.1},

  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常文件', opacity: 0.3   },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常文件名1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '异常文件名2' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '异常文件名3' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '异常文件名4' , opacity: 0.9},

  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常配置' , opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '注册信息1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '注册信息2' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '注册信息3' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '注册信息4' , opacity: 0.9},

  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常服务', opacity: 0.3   },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常服务1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '异常服务2', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '异常服务3', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '异常服务4' , opacity: 0.9},

  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常进程' , opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '异常进程1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '异常进程2' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '异常进程3' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '异常进程4' , opacity: 0.9},



];



