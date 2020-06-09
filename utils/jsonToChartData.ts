type jsonSubsidyConsultation = {
  '労働局 (097-535-2100) への相談件数': number[]
  '大分県 (0120-575-626) への相談件数': number[]
}

export const formatSubsidyConsultation = (data: jsonSubsidyConsultation) => {
  return [
    data['労働局 (097-535-2100) への相談件数'],
    data['大分県 (0120-575-626) への相談件数']
  ]
}

type jsonSubsidyApplication = {
  日付: Date
  申請書提出件数: number
  支給決定件数: number
}

export const formatSubsidyApplication = (data: jsonSubsidyApplication[]) => {
  const chartData: Array<Array<number>> = [[], []]

  let sumOfSubmitted = 0
  let sumOfPaid = 0

  data.forEach(d => {
    const submitted = d['申請書提出件数']
    const paid = d['支給決定件数']

    if (!isNaN(submitted) && !isNaN(paid)) {
      sumOfSubmitted += submitted
      sumOfPaid += paid

      chartData[0].push(sumOfSubmitted)
      chartData[1].push(sumOfPaid)
    }
  })

  return chartData
}

export const labelSubsidyApplication = (data: jsonSubsidyApplication[]) => {
  const labels: Array<string> = []

  data.forEach(d => {
    const date = new Date(d['日付'])
    labels.push(`${date.getMonth() + 1}/${date.getDate()}`)
  })

  return labels
}
