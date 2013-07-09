/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

begintime = new Date().getTime()/1000

for(i = 0; i<1000000; ++i)
{
     a = Math.random() * 11
     b = Math.random() * 11
     x = Math.floor(a)
     y = Math.floor(b)
     z = x * y;
}

endtime = new Date().getTime()/1000

speedtime = endtime - begintime

document.write("Hello world")
