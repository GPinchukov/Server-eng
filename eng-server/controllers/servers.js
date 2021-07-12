let servers = [
  {id: '1', name: 'Fly', status: 'летать'},
  {id: '2', name: 'Dry', status: 'сухой'},
  {id: '3', name: 'Cringe', status: 'стыд'},
  {id: '4', name: 'Soft', status: 'мягкий'}
]


export const create = (req, res) => {
  const newServer = {
    id: Date.now().toString(),
    ...req.body
  }
  servers.push(newServer)
  res.status(201).json(newServer)
}

export const getAll = (req, res) => {
  res.status(200).json(servers)
}


export const remove = (req, res) => {
  servers = servers.filter(s => s.id !== req.params.id)
  res.json({message: 'Server has been removed.'})
}