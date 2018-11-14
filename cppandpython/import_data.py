# load Pandas Libraries
import pandas as pd
import numpy as np
# Read *.CSV file
from  ggplot  import *
import  matplotlib.pyplot   as plt
from pandas import Timestamp

# Get csv file from
df = pd.read_csv("temp.csv")
df = df.fillna(0)
print(df.head())
df['Col_sum'] = df.iloc[:, 3:].apply(lambda x: x.sum(), axis=1)
df.insert(0, 'ID', range(0, len(df)))

df.to_csv('demo.txt', columns = ['ID', 'Col_sum'], header=False, index = False, sep ='\t')
#print(df.head())
#print(plt.figure())
#print(df['Col_sum'].plot())
#print(plt.show())



#influx  -database 'db_name' -host 'localhost' -execute 'SELECT * FROM "db_name"."your_retention_policy_or_nothing"."your_measurement_name" WHERE time > '\''2017-09-05'\'' and time < '\''2017-09-05T23:59:59Z'\'' AND other_conditions_if_required' -format 'csv' > /tmp/your_measurement_name_20170905.csv
