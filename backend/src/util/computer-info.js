const { exec } = require('child_process')
const os = require('os')

const execAsync = (command, options) =>
  new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      }
      resolve({
        stdout,
        stderr,
      })
    })
  })

const getComputerStats = async () => {
  const { stdout, stderr } = await execAsync(
    'ps -eo pid,comm,user,thcount,%mem,%cpu'
  )

  const parsedInfo = stdout
    .split('\n')
    .slice(3, stdout.split('\n').length - 1)
    .map((item) => {
      const info = item.trim().split(' ').filter(Boolean)

      return {
        pid: +info[0],
        command: info[1],
        user: info[2],
        threads: +info[3],
        memory: +info[4],
        cpu: +info[5],
      }
    })

  const totalMemory = parsedInfo.reduce(
    (total, current) => total + current.memory,
    0
  )
  const totalCPU = parsedInfo.reduce((total, current) => total + current.cpu, 0)
  const totalThreads = parsedInfo.reduce(
    (total, current) => total + current.threads,
    0
  )
  const totalTasks = parsedInfo.length

  return {
    computer: {
      processors: os.cpus().length,
      memory: os.totalmem() / 1e9,
      freeMemory: os.freemem() / 1e9,
    },
    memory: totalMemory,
    cpu: totalCPU,
    tasks: totalTasks,
    info: parsedInfo,
    threads: totalThreads,
  }
}

module.exports = {
  getComputerStats,
}
